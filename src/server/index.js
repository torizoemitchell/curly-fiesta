const axios = require('axios')
const express = require('express')
const app = express()
const port = 9001

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/sample-video', async (req, res, next) => {
  try {
    const node = await axios.get('https://brooklyn.gaia.com/node/179856')
    const nodeData = node.data
    const response = {
      tileArt: nodeData.keyart_16x9_withtext.keyart_304x171,
      seriesName: nodeData.series.title,
      title: nodeData.title,
      seasonNum: nodeData.fields.season[0].value,
      episodeNum: nodeData.fields.episode[0].value,
      durationSeconds: nodeData.feature.duration,
      teaser: nodeData.fields.teaser[0].value,
    }
    console.log('\n Got data for: ', response.title, '\n')
    res.send(response)
  } catch (error) {
    const status = error && error.response && error.response.status
    const message = error && error.response && error.response.data && error.response.data.message
    res.status(status).send({
      message,
    })
    next(error)
  }
})

app.listen(port, () => console.log(`Congrats, your server is running.  Serving from port: ${port}`))
