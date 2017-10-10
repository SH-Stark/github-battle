var React = require('react');
require('../index.css');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang){
    this.setState(function(){
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    console.log(this, 'up');
    return (
      <ul className='languages'>
        {languages.map(function(lang){
          console.log(this);
          return (
            <li
              key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Popular;
