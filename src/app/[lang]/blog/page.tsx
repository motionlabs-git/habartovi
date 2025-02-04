import { getPosts } from '@/_graphql/posts/getPosts'
import { Metadata, NextPage } from 'next'
import BlogList from './_components/BlogList'
import { getCategories } from '@/_graphql/categories/getCategories'
import CategoryAside from './_components/CategoryAside'
import Pagination from '@/_components/Pagination/Pagination'
import Blog from './_components/Blog'

interface IParams {
	lang: string
}

interface IQuery {
	page?: string
}

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Stránka',
}

const BlogPage: NextPage<{ params: IParams; searchParams: IQuery }> = async ({
	params,
	searchParams,
}) => {
	const { lang } = params
	const { page } = searchParams

	const pageInt = parseInt(page ?? '1', 10)

	return (
		<div className='flex-1 flex flex-col pt-32'>
			<section className='container flex-1 flex flex-col lg:flex-row-reverse gap-4'>
				<main className='flex-1 flex flex-col pb-8 gap-4'>
					<h1 className='font-oswald text-[4rem] sm:text-[5rem] leading-tight text-golden/60'>
						Blog
					</h1>
					<Blog lang={lang} defaultPage={pageInt} />
				</main>
			</section>
		</div>
	)
}

export default BlogPage
