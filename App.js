import React ,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

var colorRed='#e53935', colorGreen='#4caf50';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            gameState:
            [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ],
            redCount:0,
            greenCount:0,
            activePlayer:0,
               
        }
        this.buttonPress=this.buttonPress.bind(this);  
        this.renderView=this.renderView.bind(this);  
        this.viewPress=this.viewPress.bind(this); 
    }

    viewPress(row,col)
    {
        var previousPlayer=this.state.gameState[row][col];
        console.log("prev"+previousPlayer);
        var activePlayer=this.state.activePlayer;
        var array=this.state.gameState.slice();
        array[row][col]=activePlayer;
        console.log("hellooo"+array[row][col]);
        this.setState({
                gameState: array,
            })
        if(activePlayer==1 && previousPlayer==0){
            this.setState({redCount:this.state.redCount+1})
        }
        else if(activePlayer==-1 && previousPlayer==0){
             this.setState({greenCount:this.state.greenCount+1})
        }
        else if(previousPlayer==1 && activePlayer==-1){
            this.setState({redCount:this.state.redCount-1})
            this.setState({greenCount:this.state.greenCount+1})
        }
         else if(previousPlayer==-1 && activePlayer==1){
            this.setState({redCount:this.state.redCount+1})
            this.setState({greenCount:this.state.greenCount-1})
        }
    }
   
    renderView(row,col)
    {
        var value=this.state.gameState[row][col];
        switch(value)
        {
            case 1:  return <View style={{height:'100%',width:'100%',backgroundColor: colorRed}}/>

            case -1: return <View style={{height:'100%',width:'100%',backgroundColor: colorGreen}}/>

            default: return <View/>

        }

    }
    buttonPress(value)
    {  
        if(value==1){
            this.setState({
                Selected_button:'Red',
                ButtonColor1:colorRed,
                ButtonColor2: '#fff',
                activePlayer: 1
            })
        }
        else if(value==2){
            this.setState({
                Selected_button:'Green',
                ButtonColor1:'#fff',
                ButtonColor2:colorGreen,
                activePlayer: -1
            })
        }
    }
    
    render(){
        return (
            <View style={styles.main_container}>
                <View style={styles.container1}>
                      <TouchableOpacity style={{margin:10,height:50}} onPress={() => this.buttonPress(1)}>
                            <View style={{flexDirection:'row',width:80,height:50,margin:20,borderWidth:1,
                                  backgroundColor:this.state.ButtonColor1,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize: 14,color:'#000'}}>Red</Text>
                            </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={{margin:10,height:50}} onPress={() => this.buttonPress(2)}>
                            <View style={{flexDirection:'row',width:80,height:50,margin:20,borderWidth:1,
                                  backgroundColor:this.state.ButtonColor2,alignItems:'center',justifyContent:'center'}}>
                                  <Text style={{fontSize: 14,color:'#000'}}>Green</Text>
                            </View>
                      </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <View style={{alignItems: 'flex-start',justifyContent: 'flex-start'}}>
                        <Text style={{fontSize: 16,margin:5,color:'#000'}}>Active: {this.state.Selected_button}</Text>
                        <Text style={{fontSize: 16,margin:5,color:'#000'}}>Red: {this.state.redCount}</Text>
                        <Text style={{fontSize: 16,margin:5,color:'#000'}}>Green: {this.state.greenCount}</Text>
                    </View>
                    <View style={{flexDirection:'row',width:'70%',alignItems: 'center',justifyContent: 'center',}}>
                        <TouchableOpacity onPress={() => this.viewPress(0,0)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderColor:'#000',marginTop:50,}}>
                                {this.renderView(0,0)}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.viewPress(0,1)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderColor:'#000',marginTop:50,}}>
                                {this.renderView(0,1)}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.viewPress(0,2)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderRightWidth:1,borderColor:'#000',marginTop:50,}}>
                                {this.renderView(0,2)}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',width:'70%',alignItems: 'center',justifyContent: 'center',}}>
                        <TouchableOpacity onPress={() => this.viewPress(1,0)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderColor:'#000'}}>
                                {this.renderView(1,0)}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.viewPress(1,1)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderColor:'#000'}}>
                                {this.renderView(1,1)}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.viewPress(1,2)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderRightWidth:1,borderColor:'#000'}}>
                                {this.renderView(1,2)}
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',width:'70%',alignItems: 'center',justifyContent: 'center',marginBottom:20}}>
                        <TouchableOpacity onPress={() => this.viewPress(2,0)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderBottomWidth:1,borderColor:'#000'}}>
                                {this.renderView(2,0)}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.viewPress(2,1)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderBottomWidth:1,borderColor:'#000'}}>
                                {this.renderView(2,1)}
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.viewPress(2,2)}>
                            <View style={{height: 80,width: 80,borderLeftWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRightWidth:1,borderColor:'#000'}}>
                                {this.renderView(2,2)}
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        flex:0.2,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin:30
    },
    container2: {
        flex:1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
    },
});