'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('https://auth.nerdsignals.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // REQUIRED so the HttpOnly cookie is set
        body: JSON.stringify({ username, password }),
      })

      if (!res.ok) {
        const msg = await res.text().catch(() => '')
        setError(msg || 'Login failed')
        return
      }

      // v1: send them back to home (later: /dashboard route)
      router.push('/')
    } catch (err: any) {
      setError(err?.message || 'Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold">Login</h1>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm opacity-80">Username</label>
            <input
              className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm opacity-80">Password</label>
            <input
              className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm">
              {error}
            </div>
          ) : null}

          <button
            className="contained uppercase w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>

          <button
            type="button"
            className="w-full rounded-full border border-[#5ad0ff] px-4 py-2.5 text-sm font-semibold uppercase hover:bg-white/5"
            onClick={() => router.push('/create-account')}
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  )
}