var Main = React.createClass({

  // Initialize State of component
    
    getInitialState: function(props) {
    	
        return {
        	
            // Intialize the state of component 

            selectedProgressBar: '',
            progressBars: [ 
                            {value:'10', label: 'ProgressBar1',id:'progressBar1'},
                            {value:'10', label: 'ProgressBar2',id:'progressBar2'},
                            {value:'10', label: 'ProgressBar3',id:'progressBar3'}]
            
        }    
    },
    handleChange: function (event) {
    	// handle change in select option
        var progressBarId = this.refs.progressBarsSelection.getDOMNode().value;
        this.state.selectedProgressBar = progressBarId;
        console.log(this.state.selectedProgressBar);
    },
   
       handleClick: function (event) {
      // describe your behaviour .
        var selected = this.state.selectedProgressBar;
        console.log(selected);
        var inputValue = event.target.value;
        for(var i=0; i < this.state.progressBars.length ; i++ )
        {
        	if(this.state.progressBars[i].id == selected)
        	{
        		var newValue = parseInt(this.state.progressBars[i].value) + parseInt(inputValue) ;
        		if(newValue < 0)
        	    {
        	    	newValue = 0;
        	    }
        	    this.state.progressBars[i].value = newValue;
        	}
        }
      
        this.forceUpdate();
    }, 
    render: function () {
            
    	return (

          <div className="container">

	      <h1 className="text-center"> Progress Bar Demo </h1>
           <br/>
         <ProgressBarGroup options={this.state.progressBars} />
           <br/>
       <div className="row">
      <div className="col-sm-3">
       <select ref="progressBarsSelection" onChange={this.handleChange} >

                  { this.state.progressBars.map(function(progressBar)
                     
                     {
                        return <option value={progressBar.id}>{progressBar.id} </option>
                     }
                  )}
                  
      </select>
      </div>
      
      <div className="col-sm-9">
      <button  className="btn btn-default pull-right" onClick={this.handleClick}  value="25">
        25
      </button>
       <button className="btn btn-default pull-right" onClick={this.handleClick}  value="10">
        10
      </button>
       <button className="btn btn-default pull-right" onClick={this.handleClick}  value="-10">
        -10
      </button> 
      <button className="btn btn-default pull-right" onClick={this.handleClick}  value="-25">
         -25
      </button>
      </div>
      </div>
       
          </div>
          
        );    	
    }
});