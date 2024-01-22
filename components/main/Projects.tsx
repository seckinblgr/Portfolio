import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import Link from 'next/link'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20 mb-32'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Projects</h1>
        <div className='w-full h-full flex flex-col md:flex-row gap-10 px-10 '>
          <Link href={"https://starwars-app-sb.netlify.app/"} target='_blank'>
            <ProjectCard 
            src='/starwars.png'
            description="Are you ready for an exciting journey in a galaxy far, far away? Explore the iconic vehicles of the Star Wars universe with the Discover Star Wars Vehicles app. From Jedi warships to Sith Imperial vehicles, this app provides detailed information on every vehicle in the Star Wars series. Examine the features, learn the technical details, and relive memories from the legendary films. Designed for Star Wars fans, this app lets you uncover the secrets of galactic vehicles and embark on the path to becoming a powerful Jedi or a dark Sith."
            title='StarWars Aircraft'/>
            </Link>
            <Link href={"https://search-book-sb.netlify.app/"} target='_blank'>
            <ProjectCard 
            src='/book.png'
            description=" Immerse yourself in the world of literature with the ExploreBooks app. Find your next captivating read from a vast collection of genres and authors. Whether you're into gripping mysteries, heartwarming romance, or mind-bending sci-fi, ExploreBooks has it all. Browse through detailed book descriptions, reviews, and author profiles to make informed choices. Create your personalized reading list, discover hidden gems, and track your reading progress. Let ExploreBooks be your guide in the enchanting realm of stories."
            title='Book Finder'/>
            </Link>
            <Link href={"https://sb-live-weather.netlify.app/"} target='_blank'>
            <ProjectCard 
            src='/weather.png'
            description="Stay ahead of the elements, your go-to weather companion. Get real-time weather updates and forecasts for any location, ensuring you're always prepared for whatever Mother Nature has in store. With interactive maps, hourly and daily forecasts, and personalized weather alerts. Whether you're planning a weekend getaway or just want to know what to expect on your daily commute, this app provides accurate and detailed weather information. Never let the weather catch you off guard again!"
            title='Live Weather'/>
            </Link>
        </div>
    </div>
  )
}

export default Projects