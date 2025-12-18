import React from 'react'
import { Share2, Calendar, Globe, ArrowRight } from 'lucide-react';

const NewsCard = ({ article }) => {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-Us',{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
      {article.image_url && (
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            src={article.image_url}
            alt={article.title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=News+Image';
            }}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {article.source_id}
          </div>
        </div>
      )}
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition">
          {article.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {article.description}
        </p>
        
        <div className="flex items-center justify-between text-gray-500 text-xs mb-4 pt-3 border-t">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {formatDate(article.pubDate)}
          </div>
          <div className="flex items-center gap-1">
            <Globe size={14} />
            {article.source_country}
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 group/btn"
          >
            Read More
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition" />
          </a>
          <button
            onClick={() => {
              navigator.share({
                title: article.title,
                text: article.description,
                url: article.link,
              }).catch(() => {
                alert('Article link: ' + article.link);
              });
            }}
            className="px-3 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default NewsCard