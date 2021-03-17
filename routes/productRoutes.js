const mongoose = require('mongoose');
const Product = mongoose.model('products');
var cors = require('cors')
const axios = require('axios');

module.exports = (app) => {
  app.use(cors());
  app.get('/api/sale/:shopId/:index', (req, res) => {
    axios.get("https://shopee.vn/api/v2/search_items/?by=relevancy&limit=100&match_id=" + req.params.shopId + "&newest=" + req.params.index + "&order=desc&page_type=collection&version=2", {
      headers: {
        referer: "https://shopee.vn/Deal-hot-1k-col.=" + req.params.shopId + "?freeShipping=false"
      }
    })
      .then(response => {
        res.status(200).json(response.data.items);
      })
      .catch(error => {
        console.log(error);
      });
  });
}