import Link from 'next/link'

export default function Form({
	type,
	post,
	setPost,
	submitting,
	handleSubmit
}) {
	return (
		<section className="w-full max-full flex-start flex-col">
			<h1 className="head_text text-left">
				<span className="blue_gradient">{type} Post</span>
			</h1>
			<p className="desc text-left max-w-md">
				{type} and share amazing prompts with the world, and let your
				imagination run wild with any AI-powered platform.
			</p>
			<form
				className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
				method="POST"
			>
				<label htmlFor="prompt">
					<span className="font-semibold text-base text-gray-700">
						Your AI Prompt
					</span>
				</label>
				<textarea
					id="prompt"
					name="prompt"
					required
					className="form_textarea"
					placeholder="Write yout prompt here..."
					value={post.prompt}
					onChange={e => setPost({ ...post, prompt: e.target.value })}
				/>
				<label htmlFor="tag">
					<span className="font-semibold text-base text-gray-700">
						Tag{' '}
						<span className="font-normal">
							(#product, #webdevelopment, #idea)
						</span>
					</span>
				</label>
				<input
					id="tag"
					name="tag"
					required
					className="form_input"
					placeholder="#tag"
					value={post.tag}
					onChange={e => setPost({ ...post, tag: e.target.value })}
				/>
				<div className="flex-end mx-3 mb-5 gap-4">
					<Link href="/" className="text-gray-500 text-sm">
						Cancel
					</Link>
					<button
						disabled={submitting}
						type="submit"
						className="bg-orange-500 hover:bg-orange-600 rounded-full text-white px-5 py-1.5 text-sm"
            onClick={handleSubmit}
					>
						{submitting ? `${type}...` : type}
					</button>
				</div>
			</form>
		</section>
	)
}
