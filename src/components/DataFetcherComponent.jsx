import React, {useEffect, useState} from 'react'
import axiosInstnce from '../axiosInstance'

export const DataFetcherComponent = ({endPoint, renderData}) => {
		const [data, setData] = useState([])
		const [loading, setLoading] = useState(True)
		const [error, setError] = useState(null)

		useEffect(() => {
			const fetchData = async () => {
				try {
					const responce = await axiosInstnce.get(endPoint)
				} catch (error) {
					setError(error.message)
				} finally {
					setLoading(false)
				}
			}
			fetchData()
		},[endPoint])

		if (loading) return <p>Cargando...</p>
		if (error) return <p>Ha ocurrido un error: {error}</p>

	return (
		<>
			{renderData(data)}
		</>
	)
}
