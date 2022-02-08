import axios from 'axios'
import { API_BASE_URL } from './constants'

export type AXIOS_RESPONSE = {
    data?: any
}

type Params = {
    [key: string]: string
}

type Data = any

export const getUrl = (api: string, path: string): string => `${api}/${path}`

const headers = {
    'interview-id': 'iron-man',
}

export const getData = async (url: string, params?: Params): Promise<any> => {
    const result = await axios.get(url, {
        params,
        headers,
    })
    return result.data
}

export const postData = async (url: string, data?: Data): Promise<any> => {
    const result = await axios.post(url, data, {
        headers,
    })
    return result.data
}

export const putData = async (url: string, data?: Data): Promise<any> => {
    const result = await axios.put(url, data, {
        headers,
    })
    return result.data
}

export const deleteData = async (url: string, params?: Params): Promise<any> => {
    const result = await axios.delete(url, {
        params,
        headers,
    })
    return result.data
}

export const patchData = async (url: string, data?: Data): Promise<any> => {
    const result = await axios.patch(url, data, {
        headers,
    })
    return result.data
}
