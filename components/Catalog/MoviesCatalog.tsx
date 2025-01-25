'use client'
import { getMovies } from '@/services/getTitle'
import { CardData } from '@/types/types'
import React, { useEffect, useState } from 'react'
import { CardList } from '../Card/CardList'

const MoviesCatalog = () => {
    const [movies, setMovies] = useState<CardData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getMovies()
                setMovies(data)
            } catch (err) {
                console.log(err)
                setError("Не удалось загрузить сериалы.")
            }finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <p>Загрузка сериалов...</p>;
    if (error) return <p>{error}</p>
  return (
    <div>
      <CardList items={movies}/>
    </div>
  )
}

export {MoviesCatalog}
