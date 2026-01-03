

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateAccountPage() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('https://auth.nerdsignals.com/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      })

      if (!res.ok) {
        const msg = await res.text().catch(() => '')
        setError(msg || 'Account creation failed')
        return
      }

      setSuccess(true)
      setTimeout(() => router.push('/login'), 1200)
    } catch (err: any) {
      setError(err?.message || 'Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-semibold">Create Account</h1>

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
              autoComplete="new-password"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm opacity-80">Confirm Password</label>
            <input
              className="w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm">
              {error}
            </div>
          ) : null}

          {success ? (
            <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm">
              Account created. Redirecting…
            </div>
          ) : null}

          <button className="contained uppercase w-full" type="submit" disabled={loading}>
            {loading ? 'Creating…' : 'Create Account'}
          </button>

          <button
            type="button"
            className="w-full rounded-full border border-white/20 px-4 py-2.5 text-sm font-semibold uppercase hover:bg-white/5"
            onClick={() => router.push('/login')}
          >
            Back to Login
          </button>
        </form>
      </div>
    </main>
  )
}