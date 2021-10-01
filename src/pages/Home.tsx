/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import * as Styled from './styles'
import { CardPoke } from '../components/CardPoke'
import { GridCard } from '../components/GridCards'
import { GridFilter } from '../components/GridFilter'
import { Content } from '../components/Content'
import { Header } from '../components/Header'
import { Filter } from '../components/Filter'
import { Switch } from '../components/Switch'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import { getPokemons } from '../service/api'
import {
  filterPoks,
  filterOrder,
  filterTypes,
  orderAzFunc,
  orderZaFunc,
} from '../utils/utilsFunc'

export const Home = () => {
  const [allPoke, setAllPoke] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [searchOrder, setSearchOrder] = React.useState('')
  const [filteres, setFilteres] = React.useState({
    type: [],
  })
  const [favorites, setFavorites] = React.useState({
    poke: [],
  })
  const [hasFavorite, setHasFavorite] = React.useState(false)

  const getpokes = React.useCallback(async () => {
    const results = await getPokemons()
    setAllPoke(results.slice(0, 100))
  }, [])

  React.useEffect(() => {
    getpokes()
  }, [getpokes])

  const filterType = React.useMemo(() => {
    let types: any = []
    return filterTypes(allPoke, types, filteres)
  }, [allPoke, filteres])

  const filterTypeSearch = React.useMemo(() => {
    return filterPoks(filterType, search)
  }, [filterType, search])

  const pokeFilterSearch = React.useMemo(() => {
    return filterPoks(allPoke, search)
  }, [allPoke, search])

  const orderAz = orderAzFunc(pokeFilterSearch)

  const orderZa = orderZaFunc(pokeFilterSearch)

  const revertArr = pokeFilterSearch.slice(0).reverse()

  const options = [pokeFilterSearch, revertArr, orderAz, orderZa]

  const pokeFilterOrder = React.useMemo(() => {
    return filterOrder(searchOrder, options)
  }, [options, searchOrder])

  const orderAzType = orderAzFunc(filterTypeSearch)

  const orderZaType = orderZaFunc(filterTypeSearch)

  const revertArrType = filterTypeSearch.slice(0).reverse()

  const optionsType = [
    filterTypeSearch,
    revertArrType,
    orderAzType,
    orderZaType,
  ]

  const pokeFilterOrderType = React.useMemo(() => {
    return filterOrder(searchOrder, optionsType)
  }, [optionsType, searchOrder])

  const retornaValue = React.useCallback(() => {
    if (filterType.length === 0 && !pokeFilterOrder && pokeFilterSearch)
      return pokeFilterSearch
    if (filterType.length === 0 && pokeFilterOrder) return pokeFilterOrder

    if (filterType.length > 0 && !pokeFilterOrderType && filterTypeSearch)
      return filterTypeSearch

    if (filterType.length > 0 && pokeFilterOrderType) return pokeFilterOrderType
  }, [
    filterType.length,
    filterTypeSearch,
    pokeFilterOrder,
    pokeFilterOrderType,
    pokeFilterSearch,
  ])

  const testea = React.useMemo(() => {
    return retornaValue()
  }, [retornaValue])

  React.useEffect(() => {
    retornaValue()
  }, [retornaValue])

  const handleAddFavorites = useCallback(
    (fav: any, pok: any) => {
      let newFavorites = { ...favorites }
      newFavorites[pok] = fav
      setFavorites(newFavorites)
    },
    [favorites]
  )

  const handleFilters = useCallback(
    (filters: any, type: any) => {
      const newFilters = { ...filteres }
      newFilters[type] = filters
      if (!type) return
      setFilteres(newFilters)
    },
    [filteres]
  )

  return (
    <>
      <Header />
      <GridFilter>
        <Input
          value={search}
          type="text"
          placeHolder="Pesquisar por nome ou número"
          onChange={v => setSearch(v)}
        />

        <Select value={searchOrder} onChange={v => setSearchOrder(v)}>
          <Styled.Option value="1">Menor Número</Styled.Option>
          <Styled.Option value="2">Maior Número</Styled.Option>
          <Styled.Option value="3">A-Z</Styled.Option>
          <Styled.Option value="4">Z-A</Styled.Option>
        </Select>
      </GridFilter>

      <Content>
        <Filter handleFilters={filters => handleFilters(filters, 'type')} />
        <Switch
          favorite={hasFavorite}
          handleFaVoritesChange={() => setHasFavorite(!hasFavorite)}
        />
        <GridCard>
          {!hasFavorite ? (
            <CardPoke
              data={testea}
              handleFaVorites={pok => handleAddFavorites(pok, 'poke')}
            />
          ) : hasFavorite ? (
            <CardPoke
              data={favorites.poke}
              handleFaVorites={pok => handleAddFavorites(pok, 'poke')}
            />
          ) : null}

          {hasFavorite && favorites.poke.length === 0 && (
            <h1>Não há pokemons nos favoritos</h1>
          )}
          {testea.length === 0 && <h1>Não há este pokemon</h1>}
        </GridCard>
      </Content>
    </>
  )
}
