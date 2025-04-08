import React from 'react'

const Card = ({
  title = 'Default Title',
  description = 'Hello there',
  children,
  className = '',
}) => {
  return (
    <div className={`max-w-md mx-auto p-6 bg-zinc-900 text-zinc-100 rounded-2xl shadow-md ${className}`}>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-zinc-400 mb-4">{description}</p>

      <div className="text-sm leading-relaxed space-y-4">
        <p>
          To log in, you must access the site at{' '}
          <a
            href="https://vk.tech/auth/login"
            className="text-blue-400 underline hover:text-blue-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            vk.tech/auth/login
          </a>{' '}
          or simply click the link above.
        </p>
        <p>
          We recommend using <span className="text-white font-medium">Google-based authentication</span>{' '}
          instead of email — it's way more secure.
        </p>
      </div>

      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}

export default Card
