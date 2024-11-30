"use client" // include with Next.js 13+

import { useEffect, useState } from "react"
import { HttpTypes } from "@medusajs/types"

export default function Regions() {
  const [loading, setLoading] = useState(true)
  const [regions, setRegions] = useState<
    HttpTypes.StoreRegion[]
  >([])

  useEffect(() => {
    if (!loading) {
      return 
    }

    fetch(`http://localhost:9000/store/regions`, {
      credentials: "include",
      headers: {
        "x-publishable-api-key": process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "temp",
      },
    })
    .then((res) => res.json())
    .then(({ regions: dataRegions }) => {
      setRegions(dataRegions)
      setLoading(false)
    })
  }, [loading])

  return (
    <div>
      {loading && <span>Loading...</span>}
      {!loading && regions.length === 0 && <span>No regions found.</span>}
      {!loading && regions.length > 0 && (
        <ul>
          {regions.map((region) => (
            <li key={region.id}>{region.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}