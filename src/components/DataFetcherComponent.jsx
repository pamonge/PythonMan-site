import React, {useEffect, useState} from 'react'
import axiosInstance from '../axiosInstance'

export const DataFetcherComponent = ({endPoint, renderData}) => {
		const [data, setData] = useState([])
		const [loading, setLoading] = useState(true)
		const [error, setError] = useState(null)

		useEffect(() => {
			const fetchData = async () => {
				try {
					const response = await axiosInstance.get(endPoint)
					setData(response.data)
					console.log(response.data)
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
