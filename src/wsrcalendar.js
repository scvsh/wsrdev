import React, { Component } from "react";
import $ from "jquery";
import Script from 'react-load-script'

export class WsrJQCalendar extends React.Component {

handleScriptCreate() {
  this.setState({ scriptLoaded: false });
  console.log("Script created!")
}
 
handleScriptError() {
  this.setState({ scriptError: true });
  console.log("Script failed!")
}
 
handleScriptLoad() {
  this.setState({ scriptLoaded: true });
  var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();


        var data = [{
            date: year + '-' + month + '-' + (date - 1),
            value: 'hello'
        }, {
            date: year + '-' + month + '-' + date,
            value: '上班'
        }, {
            date: new Date(year, month - 1, date + 1),
            value: '吃饭睡觉打豆豆'
        }, {
            date: '2016-10-31',
            value: '2016-10-31'
        }];

        // inline
        var $ca = $('#one').calendar({
            // view: 'month',
            width: 320,
            height: 320,
            // startWeek: 0,
            // selectedRang: [new Date(), null],
            data: data,
            monthArray: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            date: new Date(2016, 9, 31),
            onSelected: function (view, date, data) {
                console.log('view:' + view)
                console.log('date:' + date)
                console.log('data:' + (data || '无'));
            },
            viewChange: function (view, y, m) {
                console.log(view, y, m)

            }
        });


        // Dynamic elements
        var $demo = $('#demo');
        var UID = 1;
        $('#add').click(function () {
            $demo.append('<input id="input-' + UID + '"><div id="ca-' + UID + '"></div>');
            $('#ca-' + UID).calendar({
                trigger: '#input-' + UID++
            })
        })
        console.log("script fired")
}

  render() {
  	return (
    <Script
      url="https://yscoder.github.io/Calendar/src/calendar.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />
    );
  }
}