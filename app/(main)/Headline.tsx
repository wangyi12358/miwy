'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { type Platform,SocialLink } from '~/components/links/SocialLink'

const socials: {
  href: string
  label: string
  platform: Platform
}[] = [
  {
    href: '/github',
    label: '我的 GitHub',
    platform: 'github'
  },
  {
    href: 'mailto:hi@cali.so',
    label: '我的邮箱',
    platform: 'mail'
  },
]

export function Headline() {

  function renderDeveloper() {
    return (
      <span className="group">
        <span className="font-mono">&lt;</span>开发者
        <span className="font-mono">/&gt;</span>
        <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
      </span>
    )
  }

  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        {renderDeveloper()}
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是 Mika，一名全栈工程师，主要技术栈 React、Typescript、Nodejs、Golang，我热爱Coding、创新、生活、以及探索和学习未知的领域。
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        {socials.map((social, index) => (
          <SocialLink
            key={`social_${index}`}
            href={social.href}
            aria-label={social.href}
            platform={social.platform}
          />
        ))}
      </motion.div>
    </div>
  )
}
