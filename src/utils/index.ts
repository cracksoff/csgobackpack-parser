import process from 'node:process'
import pg from 'pg'

export { gotScraping as got } from 'got-scraping'

export const sleep = async (ms: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, ms)
	})

export const db = new pg.Pool({
	connectionString: process.env.POSTGRES_URL,
	max: 50,
	allowExitOnIdle: true,
})
