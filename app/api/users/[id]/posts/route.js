import { connectToDB } from '@/utils/database'
import Prompt from '@/models/Prompt'

export const GET = async (req, { params }) => {
	try {
		await connectToDB()
		const prompts = await Prompt.find({
			author: params.id
		}).populate('author')
		return new Response(JSON.stringify(prompts, { status: 200 }))
	} catch (error) {
		console.log(error)
		return new Response('Failed to fetch prompts', { status: 500 })
	}
}
