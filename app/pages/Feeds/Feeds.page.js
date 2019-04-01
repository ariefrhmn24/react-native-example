import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {tesRepos} from '../../state/reducers/tesReducer';

class Feeds extends React.Component {
  componentDidMount () {
    this.props.tesRepos('');
  }
  renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );
  render () {
    const {repos} = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = (state) => {
  console.log('state', state);
  // let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
  return {
    // repos: storedRepositories
  };
};

const mapDispatchToProps = {
  tesRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
