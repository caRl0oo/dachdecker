import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function ServiceCard({ title, description, image, slug }: ServiceCardProps) {
  return (
    <Link 
      href={`/leistungen/${slug}`}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-200">
          <span className="text-sm font-medium">Mehr erfahren</span>
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </div>
      </div>
    </Link>
  );
} 