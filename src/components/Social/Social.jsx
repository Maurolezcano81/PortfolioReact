import React from 'react'
import Github from '../Svgs/Github'
import ExternalLink from '../Svgs/External'
import Twitter from '../Svgs/Twitter'
import Download from '../Svgs/Download'

const Social = () => {



    return (
        <div className='w-full flex justify-center items-center flex-wrap gap-2 md:gap-6 '>
            <div className='w-14 h-14 '>
                <img className='w-full aspect-square rounded-full object-cover' src="/avatar.png" alt="" />
            </div>

            <a href='https://github.com/maurolezcano81' target='_blank' className='flex items-center gap-2'>
                <Github
                    className='fill-neutral-50'
                    height={12}
                    width={12}
                    url='https://github.com/maurolezcano81'
                />

                <span className='underline text-xs'>Github</span>

                <ExternalLink
                    className='fill-neutral-50'
                    height={12}
                    width={12}
                />
            </a>

            <a href='https://x.com/mauro_lezcano81' target='_blank' className='flex items-center gap-2'>
                <Twitter
                    className='fill-neutral-50'
                    height={12}
                    width={12}
                    url='https://x.com/mauro_lezcano81'
                />

                <span className='underline text-xs'>Twitter</span>

                <ExternalLink
                    className='fill-neutral-50'
                    height={12}
                    width={12}
                />
            </a>

            <a href='https://x.com/mauro_lezcano81' target='_blank' className='flex items-center gap-2'>
                <span className='underline text-xs'>CV</span>

                <Download
                    className='fill-neutral-50'
                    height={12}
                    width={12}
                    url=''
                />
            </a>

        </div>
    )
}

export default Social