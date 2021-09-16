import React, { useCallback } from 'react'
import { CardPoke } from '../components/CardPoke'
import { Main } from '../components/Main'
import { GridCard } from '../components/GridCards'
import { GridFilter } from '../components/GridFilter'
import { Content } from '../components/Content'
import { Header } from '../components/Header'
import { Filter } from '../components/Filter'
import { Switch } from '../components/Switch'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import { getPokemons } from '../service/api'

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
    setAllPoke(results.slice(0, 10))
  }, [])
  React.useEffect(() => {
    getpokes()
  }, [getpokes])

  const filterType = React.useMemo(() => {
    let types: any = []
    allPoke.forEach((pok: any) => {
      if (pok?.type.some((resp: any) => filteres.type.indexOf(resp) >= 0)) {
        types.push(pok)
      }
    })
    return types
  }, [allPoke, filteres.type])

  const pokeFilter = React.useMemo(() => {
    return allPoke.filter((poks: any) =>
      poks.name.toLowerCase().includes(search.toLowerCase())
        ? poks
        : poks.national_number.includes(search)
        ? poks
        : null
    )
  }, [allPoke, search])

  const revertArr = pokeFilter.slice(0).reverse()

  const orderAz = pokeFilter.slice(0).sort(function (a, b) {
    return a?.name.toLowerCase() > b.name.toLowerCase()
      ? 1
      : b?.name.toLowerCase() > a?.name.toLowerCase()
      ? -1
      : 0
  })
  const orderZa = pokeFilter.slice(0).sort(function (a, b) {
    return a?.name.toLowerCase() > b.name.toLowerCase()
      ? -1
      : b?.name.toLowerCase() > a?.name.toLowerCase()
      ? 1
      : 0
  })

  const pokeFilterOrder = React.useMemo(() => {
    return searchOrder === '1'
      ? pokeFilter
      : searchOrder === '2'
      ? revertArr
      : searchOrder === '3'
      ? orderAz
      : searchOrder === '4'
      ? orderZa
      : null
  }, [revertArr, orderAz, orderZa, pokeFilter, searchOrder])

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

  const valid = filterType.length > 0 && !hasFavorite
  const validFav = hasFavorite

  return (
    <>
      <Header />
      <>
        <GridFilter>
          <Input
            value={search}
            type="text"
            placeHolder={`${
              valid
                ? 'Desmarque o filtro para pesquisar'
                : 'Pesquisar por nome ou número'
            }`}
            onChange={v => setSearch(v)}
            disabled={valid || validFav}
          />
          <Select
            disabled={valid || validFav}
            value={searchOrder}
            onChange={v => setSearchOrder(v)}
          >
            <option value="1">Menor Número</option>
            <option value="2">Maior Número</option>
            <option value="3">A-Z</option>
            <option value="4">Z-A</option>
          </Select>
        </GridFilter>

        <Content>
          <Main>
            <Filter handleFilters={filters => handleFilters(filters, 'type')} />
            <Switch
              favorite={hasFavorite}
              handleFaVoritesChange={() => setHasFavorite(!hasFavorite)}
            />
          </Main>
          <GridCard>
            {filterType.length === 0 && !hasFavorite && !pokeFilterOrder ? (
              <CardPoke
                data={pokeFilter}
                handleFaVorites={pok => handleAddFavorites(pok, 'poke')}
              />
            ) : !hasFavorite && filterType.length === 0 ? (
              <CardPoke
                data={pokeFilterOrder}
                handleFaVorites={pok => handleAddFavorites(pok, 'poke')}
              />
            ) : hasFavorite ? (
              <CardPoke
                data={favorites.poke}
                handleFaVorites={pok => handleAddFavorites(pok, 'poke')}
              />
            ) : filterType ? (
              <CardPoke
                data={filterType}
                handleFaVorites={pok => handleAddFavorites(pok, 'poke')}
              />
            ) : null}

            {hasFavorite && favorites.poke.length === 0 && (
              <h1>Não há pokemons nos favoritos</h1>
            )}
            {pokeFilter.length === 0 && <h1>Não há este pokemon</h1>}
          </GridCard>
        </Content>
      </>
    </>
  )
}
