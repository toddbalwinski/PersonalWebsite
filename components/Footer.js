      
import Image from 'next/image'

export default function Footer() {
  return (   
    <footer
        id="contact"
        className="scroll-mt-16 mt-12 border-t border-lightGray pt-6 text-center"
    >
        <p className="text-sm">
            <a href="tel:+15715219973" className="hover:underline">
                +1 (571) 521-9973
            </a>{' '}
                {' '}
            <a href="mailto:tbalwinski@gmail.com" className="hover:underline">
                tbalwinski@gmail.com
            </a>
        </p>
        <p className="text-xs mt-2">
            &copy; 2025 Todd Balwinski. All rights reserved.
        </p>
    </footer>
  )
}