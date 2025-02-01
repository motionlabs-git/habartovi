import { getCategory } from '@/_graphql/categories/getCateogry'
import { NextPage } from 'next'
import { getCategories } from '@/_graphql/categories/getCategories'
import Link from 'next/link'
import CategoryAside from '../../_components/CategoryAside'
import BlogList from '../../_components/BlogList'

interface IParams {
	lang: string
	slug: string
}

export const generateMetadata = ({ params }: { params: IParams }) => {
	const { slug } = params

	return {
		title: `Kategorie ${slug}`,
		description: 'description',
	}
}

const Category: NextPage<{ params: IParams }> = async ({ params }) => {
	const { lang, slug } = params

	const categories = await getCategories()
	const category = await getCategory(slug)

	return (
		<div className='flex flex-col pt-32'>
			<section className='container flex-1 flex flex-col lg:flex-row-reverse gap-4'>
				<main className='flex-1 flex flex-col pb-8 gap-4'>
					{category && (
						<>
							<h1 className='font-oswald opacity-60 text-5xl leading-tight text-golden'>
								<Link
									className='text-golden hover:text-goldenAccent'
									href={'/blog'}
								>
									Blog
								</Link>{' '}
								- {category.name}
							</h1>
							<div className='flex flex-col-reverse md:flex-row gap-5 md:gap-10'>
								{category.posts && (
									<div className='flex-1 flex flex-col gap-8'>
										<BlogList
											lang={lang}
											posts={category.posts.nodes}
										/>
									</div>
								)}
								{categories && (
									<CategoryAside
										lang={lang}
										categories={categories.nodes}
									/>
								)}
							</div>
						</>
					)}
				</main>
			</section>
		</div>
	)
}

export default Category
