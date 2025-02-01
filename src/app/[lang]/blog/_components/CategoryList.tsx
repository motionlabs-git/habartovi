'use client'
import { ICategory } from '@/_graphql/categories/category.interface'
import Link from 'next/link'
import React from 'react'
import CategoryLink from './CategoryLink'
import { usePathname } from 'next/navigation'

const CategoryList: React.FC<{
	lang: string
	categories: ICategory[]
}> = ({ lang, categories }) => {
	const path = usePathname().split('/')
	let blogPath = path[2]

	if (path.includes('rubriky')) {
		blogPath = path[4]
	}

	return (
		<ul className='flex flex-col gap-2 mt-4'>
			<li>
				<Link href={`/blog`}>
					<h3
						className={`font-oswald text-2xl leading-tight ${
							blogPath === 'blog'
								? 'text-secondary underline'
								: 'text-golden opacity-60 duration-300 hover:opacity-100 hover:text-goldenAccent'
						}`}
					>
						Všechny články
					</h3>
				</Link>
			</li>
			{categories.map((category) => (
				<CategoryLink
					key={category.id}
					lang={lang}
					category={category}
					selected={blogPath === category.slug ? true : false}
				/>
			))}
		</ul>
	)
}

export default CategoryList
