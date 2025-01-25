'use client'
import { getAnimes } from '@/services/getTitle'
import { CardData } from '@/types/types'
import React, { useEffect, useState } from 'react'
import { CardList } from '../Card/CardList'

const AnimesCatalog = () => {
    const [animes, setAnimes] = useState<CardData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() =>{
        const fetchData = async () => {
            try {
                setLoading(true)
                const data = await getAnimes()
                setAnimes(data)
            } catch (err) {
                console.log(err)
                setError("Не удалось загрузить сериалы.")
            }finally {
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if (loading) return <p>Загрузка сериалов...</p>;
    if (error) return <p>{error}</p>;
  return (
    <div>
      <h1 className='text-white mb-4'>Аниме смотреть онлайн</h1>
      <CardList items={animes}/>
    </div>
  )
}

export {AnimesCatalog}
