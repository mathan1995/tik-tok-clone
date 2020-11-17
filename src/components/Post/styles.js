import {StyleSheet, Dimensions} from 'react-native';

export const colors = {
  primary: '#000',
  white: '#fff',
  gray: '#3d3d3c',
  pink: '#eb3452',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#000',
    height: Dimensions.get('window').height - 70,
  },
  videoPlayBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  UiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  descriptionText: {
    textAlign: 'left',
    fontSize: 20,
    color: colors.white,
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 8,
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  description: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {color: colors.white, fontSize: 16, marginLeft: 5},

  //   SIDE Container
  profilepicContainer: {},
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: colors.white,
  },
  iconContainer: {
    alignItems: 'center',
    elevation: 10,
  },
  statsLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  songPic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: colors.gray,
  },
});

export default styles;
