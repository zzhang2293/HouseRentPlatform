import React from 'react';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find, rentals, find properties, find hosue',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <div>
            <div>{ children }</div>
        </div>
    </html>

  )
}

export default MainLayout
