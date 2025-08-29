import React from 'react'
import H1 from '../ui/H1'

export default function Featured() {
  return (
    <section className="flex flex-col gap-2 section items-center justify-center">
        <H1 input="Featured" />
       <span className="text-gray-400 max-w-xl">
        Discover our handpicked selection of styles curated just for you. From timeless essentials to
        statement pieces, explore what’s trending and find your perfect match.
      </span>
    </section>
  )
}
