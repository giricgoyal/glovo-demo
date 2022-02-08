import { deleteData, getData, getUrl, postData } from 'src/common/api'
import { API_BASE_URL } from 'src/common/api/constants'

export type Glover = {
    name: string
    id: string
}

export type Glovers = {
    [key: string]: Glover
}

const getGloverUrl = (path = '') => getUrl(API_BASE_URL, `glovers${path}`)

export const getGlovers = (): Promise<Glovers> => {
    return getData(getGloverUrl())
}

export const addGlovers = (data) => {
    return postData(getGloverUrl(), data)
}

export const deleteGlover = (id: string) => {
    return deleteData(getGloverUrl(`/${id}`))
}
