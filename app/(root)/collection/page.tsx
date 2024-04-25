import { getSavedServices } from '@/lib/actions/user.action'
import { auth } from '@clerk/nextjs'
import React from 'react'

const Collection = async () => {
    const { userId } = auth()
    if (!userId) {
        return null
    }
    const result = await getSavedServices({ clerkId: userId })
  return (
    <div>Collection</div>
  )
}

export default Collection