import Image from 'next/image'
import UbytovaniImg from '@/../public/images/Ubytování.jpg'
import Button from '@/_components/Buttons/Button'
import { getIGPosts } from '@/_axios/instagram/getIGPosts'
import Link from 'next/link'

const Services = async () => {
	const instagramPosts = await getIGPosts()

	return (
		<section id='nase-sluzby' className='bg-green1 rounded-2xl'>
			<div className='bg-green1 rounded-2xl py-20 sticky top-10'>
				<div className='container flex-col-reverse md:flex-row flex gap-5 sm:gap-10 items-center'>
					<div className='flex-1 '>
						<div className='aspect-video rounded-md overflow-hidden'>
							<Image
								src={UbytovaniImg}
								width={1000}
								height={800}
								alt={'Ubytování'}
								className=' object-cover'
							></Image>
						</div>
					</div>

					<div className='flex-1'>
						<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
							Soukromé ubytování v přírodě
						</h2>
						<p className='mt-4 sm:mt-8 text-white'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Similique facere corporis cum adipisci
							temporibus quis delectus debitis eum laudantium
							illum, voluptate laboriosam repudiandae. Voluptas
							totam, accusamus est doloremque vel laborum?
						</p>

						<Button
							className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-4 sm:mt-8'
							link={'/ubytovani'}
							text={'Přejít na ubytování'}
						></Button>
					</div>
				</div>
			</div>

			<div className='bg-green2 rounded-2xl py-20 sticky top-10'>
				<div className='container flex-col md:flex-row flex gap-5 sm:gap-10 items-center'>
					<div className='flex-1'>
						<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
							Keramická dílna
						</h2>
						<p className='mt-4 sm:mt-8 text-white'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Similique facere corporis cum adipisci
							temporibus quis delectus debitis eum laudantium
							illum, voluptate laboriosam repudiandae. Voluptas
							totam, accusamus est doloremque vel laborum?
						</p>

						<Button
							className='bg-golden hover:bg-transparent border-2 border-golden hover:text-golden text-white mt-4 sm:mt-8'
							link={'/keramicka-dilna'}
							text={'Přejít na keramickou dílnu'}
						></Button>
					</div>
					<div className='flex-1 '>
						<div className='aspect-video rounded-md overflow-hidden'>
							<Image
								src={UbytovaniImg}
								width={1000}
								height={800}
								alt={'Ubytování'}
								className=' object-cover'
							></Image>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-background rounded-t-2xl py-20 sticky top-10'>
				<div className='container'>
					<h2 className='font-oswald text-golden text-2xl sm:text-3xl uppercase font-bold'>
						Instagram
					</h2>
					<ul className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
						{instagramPosts &&
							instagramPosts.slice(0, 4).map((post) => (
								<li key={post.id}>
									<Link href={post.permalink} target='_blank'>
										<Image
											key={post.id}
											src={post.media_url}
											title={post.caption}
											alt={
												post.caption.length > 20
													? `${post.caption.slice(
															0,
															20
													  )}...`
													: post.caption
											}
											width={240}
											height={240}
											className='w-full aspect-square object-cover object-center'
										/>
									</Link>
								</li>
							))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Services
