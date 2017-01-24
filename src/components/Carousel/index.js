import React from 'react'

import styles from './styles'

import {
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        const size = { width: 0, height: 0 }
        const pos = { x: 0, y: 0 }
        const childrenCount = props.children.length ? props.children.length : 1
        const currentPage = props.currentPage ? props.currentPage : 0
        this.state = {
            size: size,
            pos: pos,
            currentPage: currentPage,
            childrenCount: childrenCount
        }
    }

    _onLayout = () => {
        this.container.measure((x, y, w, h) => {
            this.setState({
                size: { width: w, height: h },
                pos: { x: x, y: y }
            });
        });
    }

    render() {
        const {size, pos} = this.state
        const children = this.props.children
        let pages = []

        if (children && children.length > 1) {
            for (let i = 0; i < children.length; i += 1) {
                pages.push(children[i]);
            }
        } else if (children) {
            pages.push(children);
        } else {
            return <Text style={{ backgroundColor: 'white' }}>
                Error!
            </Text>
        }

        pages = pages.map((page, i) => {
            return <TouchableWithoutFeedback style={[{ ...this.state.size }, { backgroundColor: 'green' }]} key={`page${i}`}>
                {page}
            </TouchableWithoutFeedback>
        })

        const containerProps = {
            ref: (c) => { this.container = c; },
            onLayout: this._onLayout,
            style: [this.props.style],
        };

        const contents = <ScrollView
            ref={(c) => this.scrollView = c}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator = {false}
            showsVerticalScrollIndicator = {false}
            contentContainerStyle={[
                styles.horizontalScroll,
                this.props.contentContainerStyle,
                {
                    width: size.width * (children.length),
                    height: size.height,
                },
            ]}
            >
            <Image style={[
                { position: 'absolute' },
                {
                    width: size.width * (children.length),
                    height: size.height
                }
            ]} source={require('./images/12941200434_12e6b178cc_k.jpg')} resizeMethod="auto">
            </Image>
            {pages}
        </ScrollView>

        return <View  {...containerProps} >
            {contents}
        </View>
    }
}