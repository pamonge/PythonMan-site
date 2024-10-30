import React, {useEffect, useState} from 'react'
import axiosInstnce from '../axiosInstance'

export const DataFetcherComponent = ({endPoint, renderData}) => {
		const [data, setData] = useState([])
		const [loading, setLoading] = useState(True)
		const [error, setError] = useState(null)

		useEffect(() => {
			const fetchData = async () => {
				try {

				} catch (error) {
					setError(error.message)
				} finally {
					setLoading(false)
				}
			}
		})

	return (
		<div>DataComponent</div>
	)
}
