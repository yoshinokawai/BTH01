import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = Math.min(width, 390);
const VIEWFINDER_WIDTH = SCREEN_WIDTH * 0.82;
const VIEWFINDER_HEIGHT = VIEWFINDER_WIDTH * 1.66;
const CORNER_SIZE = 36;
const CORNER_THICKNESS = 3.5;

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingTop: 50,
    },

    // Back Button
    backButton: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: '#5B6AF0',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
        marginBottom: 10,
        zIndex: 10,
    },
    backIcon: {
        fontSize: 26,
        color: '#FFFFFF',
        fontWeight: '300',
        marginTop: -2,
    },

    // Viewfinder
    viewfinderContainer: {
        width: VIEWFINDER_WIDTH,
        height: VIEWFINDER_HEIGHT,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },

    corner: {
        position: 'absolute',
        width: CORNER_SIZE,
        height: CORNER_SIZE,
    },
    cornerTopLeft: {
        top: 0,
        left: 0,
        borderTopWidth: CORNER_THICKNESS,
        borderLeftWidth: CORNER_THICKNESS,
        borderColor: 'rgba(255,255,255,0.9)',
        borderTopLeftRadius: 16,
    },
    cornerTopRight: {
        top: 0,
        right: 0,
        borderTopWidth: CORNER_THICKNESS,
        borderRightWidth: CORNER_THICKNESS,
        borderColor: 'rgba(255,255,255,0.9)',
        borderTopRightRadius: 16,
    },
    cornerBottomLeft: {
        bottom: 0,
        left: 0,
        borderBottomWidth: CORNER_THICKNESS,
        borderLeftWidth: CORNER_THICKNESS,
        borderColor: 'rgba(255,255,255,0.9)',
        borderBottomLeftRadius: 16,
    },
    cornerBottomRight: {
        bottom: 0,
        right: 0,
        borderBottomWidth: CORNER_THICKNESS,
        borderRightWidth: CORNER_THICKNESS,
        borderColor: 'rgba(255,255,255,0.9)',
        borderBottomRightRadius: 16,
    },

    // Product Image
    productImage: {
        width: VIEWFINDER_WIDTH * 0.58,
        height: VIEWFINDER_HEIGHT * 0.85,
    },

    // Scanning Line (thin line like Figma: 150×3 + 138×3)
    scanLineContainer: {
        position: 'absolute',
        flexDirection: 'row',
        width: VIEWFINDER_WIDTH,
        height: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanLineLeft: {
        width: VIEWFINDER_WIDTH * 0.47,
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 1.5,
    },
    scanLineGap: {
        width: 8,
    },
    scanLineRight: {
        width: VIEWFINDER_WIDTH * 0.43,
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 1.5,
    },

    // Bottom Product Card
    productCard: {
        position: 'absolute',
        bottom: 36,
        left: (width - SCREEN_WIDTH * 0.82) / 2,
        width: SCREEN_WIDTH * 0.82,
        height: 82,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 6,
    },
    productThumbnail: {
        width: 50,
        height: 50,
        borderRadius: 14,
        backgroundColor: '#F0EBE4',
    },
    productInfo: {
        flex: 1,
        marginLeft: 14,
    },
    productBrand: {
        fontSize: 13,
        color: '#9E9FAF',
        fontWeight: '400',
    },
    productName: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1A1A2E',
        marginTop: 2,
    },
    addButton: {
        width: 42,
        height: 42,
        borderRadius: 14,
        backgroundColor: '#5B6AF0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addIcon: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '400',
    },
});
