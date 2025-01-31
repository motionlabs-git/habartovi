import React from 'react'

const ParkingIcon = ({ className }: { className: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			shapeRendering='geometricPrecision'
			textRendering='geometricPrecision'
			imageRendering='optimizeQuality'
			fillRule='evenodd'
			clipRule='evenodd'
			viewBox='0 0 512 498.226'
			fill='currentColor'
			className={className}
		>
			<g fill-rule='nonzero'>
				<path
					fill='currentColor'
					d='M84.662 0h342.676C473.934 0 512 38.065 512 84.662v328.902c0 46.596-38.066 84.662-84.662 84.662H84.662C38.065 498.226 0 460.16 0 413.564V84.662C0 38.065 38.065 0 84.662 0z'
				/>
				<path
					fill='#fff'
					d='M413.309 54.139H98.691c-12.229 0-23.367 5.021-31.449 13.103-8.082 8.083-13.104 19.22-13.104 31.449v300.844c0 12.229 5.022 23.365 13.104 31.447 8.082 8.082 19.22 13.105 31.449 13.105h314.618c12.227 0 23.364-5.023 31.447-13.105 8.082-8.082 13.105-19.22 13.105-31.447V98.691c0-12.229-5.023-23.366-13.105-31.449-8.083-8.082-19.218-13.103-31.447-13.103zM98.691 38.548h314.618c16.53 0 31.567 6.773 42.468 17.674 10.9 10.9 17.674 25.939 17.674 42.469v300.844c0 16.53-6.774 31.568-17.674 42.468-10.901 10.9-25.938 17.674-42.468 17.674H98.691c-16.531 0-31.57-6.774-42.47-17.674-10.9-10.9-17.673-25.938-17.673-42.468V98.691c0-16.529 6.773-31.569 17.673-42.469 10.9-10.901 25.941-17.674 42.47-17.674z'
				/>
				<path
					fill='#fff'
					d='M206.947 287.965v-46.318h54.308c6.946 0 12.534-1.149 16.868-3.395 4.282-2.246 7.415-5.328 9.452-9.243 2.037-3.916 3.082-8.459 3.082-13.526 0-5.534-1.045-10.653-3.082-15.457s-5.17-8.668-9.452-11.541c-4.334-2.923-9.922-4.385-16.868-4.385h-32.898v176.399h-57.494V137.728h90.392c18.07 0 33.631 3.395 46.738 10.131 13.106 6.737 23.238 15.874 30.288 27.519 7.101 11.646 10.652 24.909 10.652 39.792 0 14.464-3.551 27.154-10.652 38.069-7.05 10.914-17.182 19.425-30.288 25.535-13.107 6.163-28.668 9.191-46.738 9.191h-54.308z'
				/>
			</g>
		</svg>
	)
}

export default ParkingIcon
