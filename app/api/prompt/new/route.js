import { connectToDB } from '@/utils/database'
import Prompt from '@/models/Prompt'

export const POST = async (req) => {
	const { userId, tag, prompt } = await req.json()
	try {
		await connectToDB()
		const newPrompt = new Prompt({
			author: userId,
			tag,
			prompt
		})
		await newPrompt.save()
		return new Response(JSON.stringify(newPrompt, { status: 200 }))
	} catch (error) {
		console.log(error)
		return new Response("Failed to create a new prompt", { status: 500})
	}
}
