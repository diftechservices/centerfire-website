import express from 'express'

const router = express.Router()

// POST /api/contact - Handle contact form submissions
router.post('/', async (req, res) => {
  try {
    const { name, email, company, message, timestamp, source } = req.body
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
      })
    }
    
    // TODO: Implement your automation server logic here
    console.log('📧 Contact form submission:', {
      name,
      email,
      company,
      message: message.substring(0, 100) + '...',
      timestamp,
      source
    })
    
    // For now, simulate successful submission
    // Replace this with your actual automation server call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    res.json({
      success: true,
      message: 'Contact form submitted successfully',
      submissionId: `CF_${Date.now()}`,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      error: 'Failed to process contact form',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
})

// GET /api/contact/test - Test endpoint
router.get('/test', (req, res) => {
  res.json({
    message: 'Contact API is working',
    timestamp: new Date().toISOString()
  })
})

export default router