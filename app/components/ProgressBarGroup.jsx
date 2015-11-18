var ProgressBarGroup = React.createClass({

    	 render: function () {
         return (
            <div>
              {this.props.options.map(function(optionChild) {
                return (
                 <ProgressBar value={optionChild.value} key={optionChild.id} option= {optionChild} >
                  </ProgressBar>
                );

           }
            )}
           </div>

         );
     }
 });
	 