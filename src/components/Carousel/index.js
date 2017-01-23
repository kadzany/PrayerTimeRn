import React from 'react'

import styles from './styles'

import {
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
} from 'react-native';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        const size = { width: 0, height: 0 }
        const childrenCount = props.children.length ? props.children.length : 1
        const currentPage = props.currentPage ? props.currentPage : 0
        this.state = {
            size: size,
            currentPage: currentPage,
            childrenCount: childrenCount
        }
    }

    _onLayout = () => {
        this.container.measure((x, y, w, h) => {
            this.setState({
                size: { width: w, height: h },
            });
            // this._placeCritical(this.state.currentPage);
        });
    }

    render() {
        const {size} = this.state
        const children = this.props.children
        let pages = []

        if (children && children.length > 1) {
            for (let i = 0; i < children.length; i += 1) {
                pages.push(children[i]);
            }
            // pages.push(children[0]);
            // pages.push(children[1]);
        } else if (children) {
            pages.push(children);
        } else {
            return <Text style={{ backgroundColor: 'white' }}>
                You are supposed to add children inside Carousel
            </Text>
        }

        pages = pages.map((page, i) => {
            return <TouchableWithoutFeedback style={[{ ...this.state.size }]} key={`page${i}`}>
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
            contentContainerStyle={[
                styles.horizontalScroll,
                this.props.contentContainerStyle,
                {
                    width: size.width * (children.length),
                    height: size.height,
                },
            ]}
            >
            {pages}
        </ScrollView>

        return <View {...containerProps}>
            {contents}
        </View>
    }
}