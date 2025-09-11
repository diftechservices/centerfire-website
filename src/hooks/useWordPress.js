import { useState, useEffect } from 'react'
import { contentAPI } from '../services/api'

export const useWordPressContent = (type = 'page', slug = null, includeACF = true) => {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Add ACF fields to API request if enabled
        const params = includeACF ? { acf_format: 'standard', _fields: 'id,title,content,excerpt,acf,featured_media,date,modified' } : {}
        
        let data
        if (slug) {
          // Fetch by slug
          if (type === 'page') {
            data = await contentAPI.getPageBySlug(slug)
          } else {
            data = await contentAPI.getPostBySlug(slug)
          }
        } else {
          // Fetch all with params
          data = type === 'page'
            ? await contentAPI.getPages(params)
            : await contentAPI.getPosts(params)
        }
        
        setContent(data)
      } catch (err) {
        setError(err.message)
        console.error(`Error fetching ${type}:`, err)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [type, slug, includeACF])

  return { content, loading, error }
}

export const useWordPressPosts = (params = {}) => {
  return useWordPressContent('post', null, params)
}

export const useWordPressPages = (params = {}) => {
  return useWordPressContent('page', null, params)
}

export const useWordPressPage = (slug) => {
  return useWordPressContent('page', slug)
}

export const useWordPressPost = (slug) => {
  return useWordPressContent('post', slug)
}