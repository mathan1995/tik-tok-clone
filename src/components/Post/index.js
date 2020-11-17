import React, {useState} from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
const index = (props) => {
  const [paused, setPause] = useState(false);
  const [post, setPost] = useState(props.post);
  const [isliked, setIsliked] = useState(false);
  // const {post} = props;
  // console.log(post);

  const onPlayPausePress = () => {
    setPause(!paused);
  };

  const onLikePressed = () => {
    // console.warn('press');
    const likedtoAdd = isliked ? -1 : 1;
    setPost({...post, likes: post.likes + likedtoAdd});
    setIsliked(!isliked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={onPlayPausePress}
        style={styles.videoPlayBtn}>
        <View>
          <Video
            source={{uri: post.videolink}}
            style={styles.video}
            resizeMode="cover"
            repeat={true}
            paused={paused}
          />

          <View style={styles.UiContainer}>
            <View style={styles.rightContainer}>
              <View style={styles.profilepicContainer}>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri: post.user.profilepic,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => onLikePressed()}>
                <Ant
                  name={'heart'}
                  size={35}
                  color={isliked ? 'red' : 'white'}
                />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <FontAwesome
                  name={'commenting'}
                  size={35}
                  color="#fff"
                  style={{elevation: 10}}
                />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Fontisto name={'share-a'} size={32} color="#fff" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>{`@${post.user.username}`}</Text>
                <Text style={styles.description}>{post.description}</Text>

                <View style={styles.songRow}>
                  <Icon name={'beamed-note'} size={24} color="#fff" />
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>
              <Image
                style={styles.songPic}
                source={{
                  uri: post.songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default index;
