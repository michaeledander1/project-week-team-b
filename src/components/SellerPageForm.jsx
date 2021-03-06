import * as React from 'react'
import images from '../lib/dummyData'


export default class SellerPageForm extends React.PureComponent {
  state = { submitted: false, title1: 0, description1: 0}

  handleChange = (event) => {
      const value = event.target.value
      const name = event.target.name
  
    this.setState(
      {[name]: value})
  }
    
  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()

    const newItem = {
      id: this.props.images.images.length +1,          
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      description: this.state.description,
      price: this.state.price,
      priceGroup: this.priceGroupGenerator(),
      condition: this.state.condition,
      category: this.state.category,
      age: this.state.age,
      gender: this.state.gender
    }
    
    this.props.addItem(newItem)
    images.push(newItem)

    this.setState(
      {
        submitted: !this.state.submitted
      }
    )
  }

  toggle = () => {
    this.setState({
      submitted: !this.state.submitted
    })
  }

  priceGroupGenerator = () => {
    const price = this.state.price
      
    if (price === 0) {
          return '0'
      } else if (price >= 1 && price <= 10) {
          return '1-10' 
      } else if (price >= 11 && price <= 20) {
          return '11-20' 
      } else if (price >= 21 && price <= 30) {
          return '21-30' 
      } else if (price >= 31 && price <= 40) {
          return '31-40' 
      } else if (price >= 41 && price <= 50) {
          return '41-50' 
      } else if (price >= 50) {
          return '50+' 
      } else {
          return ''
      }
    }

    countWordsTitle = (event) => {
      let currentText = event.target.value
      let characterCount = currentText.length
      this.setState({title1: characterCount })
    }

    countWordsDescription = (event) => {
      let currentText = event.target.value
      let characterCount = currentText.length
      this.setState({description1: characterCount })
    }
    
    
  render() {
    if (!this.state.submitted) {
    return (
    <div>   
        <form onSubmit={this.handleSubmit} className = "seller-page-container">
        <div className = "seller-page-left"> 
        <label>
          <p>Category</p>
          <select className = "category-selector" name="category" onChange={this.handleChange}>
          <option id = "arrow" value=""></option>
            <option value="toys">Toys</option>
            <option value="furniture">Furniture</option>
            <option value="clothes">Clothes</option>
          </select>
        </label><br />
        <label>
          <p>Upload Image</p>
          <input className = "select-image"
          type="text" 
          name="imageUrl" 
          placeholder="upload an image URL"
          onChange={this.handleChange} />
        </label><br />
        <label>
          <p>Title</p>
          <input className = "select-title"
          type="text" 
          name="title" 
          pattern="[A-Za-z\s]+"
          maxLength="150"
          minLength="2" 
          placeholder="title"
          onChange={this.handleChange && this.countWordsTitle} />
        <div className="title-character-count">{this.state.title1}/150</div>
        </label><br />
        <label>
          <p>Price</p>
          <input type="number" className= "select-price"
          name="price"
          placeholder="price"
          minLength="1"
          onChange={this.handleChange} />
        </label><br />
      </div>
      <div className = "seller-page-right">
        <label>
          <p>Description</p>
          <textarea className= "select-description"
          name="description" 
          minLength="2" 
          maxLength="500" 
          placeholder="please enter description"
          onChange={this.handleChange && this.countWordsDescription} />
          <div className = "description-character-count">{this.state.description1}/500</div>
        </label><br />
        <label>
          <p>Condition</p>
          <select className = "select-condition" name="condition" onChange={this.handleChange}>
          <option value=""></option>
            <option value="brand new">Brand new</option>
            <option value="as good as new">As good as new</option>
            <option value="acceptable">Acceptable</option>
            <option value="used">Used</option>
          </select>
        </label><br />
        <label>
          <p>Age range</p>
          <select className = "select-age" name="age" onChange={this.handleChange}>
          <option value=""></option>
            <option value="0-2">0 - 2 years</option>
            <option value="2-4">2 - 4 years</option>
            <option value="4-6">4 - 6 years</option>
            <option value="6+">6 years and over</option>
          </select>
        </label><br />
        <label>
          <p>Gender</p>
          <select className = "select-gender" name="gender" onChange={this.handleChange}>
          <option value=""></option>
            <option value="girl">Girl</option>
            <option value="boy">Boy</option>
            <option value="uni">Unisex</option>
          </select>
        </label><br />
        <div>
        <input className = "submit-button" type="submit" value="Submit" /><br />
        </div>
        </div>
      </form>
      </div>)
    } else{
      return (
        <div>   
            <form onSubmit={this.handleSubmit} className = "seller-page-container">
            <div className = "seller-page-left"> 
            <label>
              <p>Category</p>
              <select className = "category-selector" name="category" onChange={this.handleChange}>
              <option id = "arrow" value=""></option>
                <option value="toys">Toys</option>
                <option value="furniture">Furniture</option>
                <option value="clothes">Clothes</option>
              </select>
            </label><br />
            <label>
              <p>Upload Image</p>
              <input className = "select-image"
              type="text" 
              name="imageUrl" 
              placeholder="upload an image URL"
              onChange={this.handleChange} />
            </label><br />
            <label>
              <p>Title</p>
              <input className = "select-title"
              type="text" 
              name="title" 
              pattern="[A-Za-z\s]+"
              maxLength="150"
              minLength="2" 
              placeholder="title"
              onChange={this.handleChange && this.countWords} />
            <div className="title-character-count">{this.state.words}/150</div>
            </label><br />
            <label>
              <p>Price</p>
              <input type="number" className= "select-price"
              name="price"
              placeholder="price"
              minLength="1"
              onChange={this.handleChange} />
            </label><br />
          </div>
          <div className = "seller-page-right">
            <label>
              <p>Description</p>
              <textarea className= "select-description"
              name="description" 
              minLength="2" 
              maxLength="500" 
              placeholder="please enter description (max 200 words)"
              onChange={this.handleChange && this.countWords} />
              <div className = "description-character-count">{this.state.words}/500</div>
            </label><br />
            <label>
              <p>Condition</p>
              <select className = "select-condition" name="condition" onChange={this.handleChange}>
              <option value=""></option>
                <option value="brand new">Brand new</option>
                <option value="as good as new">As good as new</option>
                <option value="acceptable">Acceptable</option>
                <option value="used">Used</option>
              </select>
            </label><br />
            <label>
              <p>Age range</p>
              <select className = "select-age" name="age" onChange={this.handleChange}>
              <option value=""></option>
                <option value="0-2">0 - 2 years</option>
                <option value="2-4">2 - 4 years</option>
                <option value="4-6">4 - 6 years</option>
                <option value="6+">6 years and over</option>
              </select>
            </label><br />
            <label>
              <p>Gender</p>
              <select className = "select-gender" name="gender" onChange={this.handleChange}>
              <option value=""></option>
                <option value="girl">Girl</option>
                <option value="boy">Boy</option>
                <option value="uni">Unisex</option>
              </select>
            </label><br />
            <div>
            <input className = "submit-button" type="submit" value="Submit" /><br />
            </div>
            </div>
            <div> 
            <h1 className = "new-item">You have submitted the following item:</h1>
            <h3 className = "new-item-title">Title: {this.state.title}</h3>
            <h3 className = "new-item-description">Description: {this.state.description}</h3>
            <h3 className = "new-item-price">Price: €{this.state.price}</h3>
            <h3 className = "new-item-condition">Condition: {this.state.condition}</h3>
            <h3 className = "new-item-category">Category: {this.state.category}</h3>
            <h3 className = "new-item-age">Age range: {this.state.age}</h3>
            <h3 className = "new-item-gender">Gender: {this.state.gender}</h3>
            <img className = "new-item-image" src={this.state.imageUrl} alt="product" />
            <button className="btn-upload" onClick={this.toggle}>Upload another item</button>
          </div>
          </form>
        </div>)
      } 
    }
}





    // else {
    //   return (
    //     <div> 
    //       <h1>You have submitted the following item:</h1>
    //       <h3>Title: {this.state.title}</h3>
    //       <h3>Description: {this.state.description}</h3>
    //       <h3>Price: €{this.state.price}</h3>
    //       <h3>Condition: {this.state.condition}</h3>
    //       <h3>Category: {this.state.category}</h3>
    //       <h3>Age range: {this.state.age}</h3>
    //       <h3>Gender: {this.state.gender}</h3>
    //       <img src={this.state.imageUrl} alt="product" />
    //       <button className="btn-upload" onClick={this.toggle}>Upload another item</button>
    //       </div>
    //   )
    // }
    
