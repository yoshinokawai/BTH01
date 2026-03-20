import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = Math.min(width, 390);
const VIEWFINDER_WIDTH = SCREEN_WIDTH * 0.58;
const VIEWFINDER_HEIGHT = SCREEN_WIDTH * 1.15;
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
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 16,
        marginBottom: 10,
        zIndex: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    backIcon: {
        fontSize: 26,
        color: '#5B6AF0',
        fontWeight: '300',
        marginTop: -2,
    },
    backArrowImage: {
        width: 16,
        height: 16,
        marginRight: 2, // fine tune arrow visual center
    },

    // Viewfinder
    viewfinderContainer: {
        width: VIEWFINDER_WIDTH,
        height: VIEWFINDER_HEIGHT,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        // Removed full border to use corner markers instead
        borderRadius: 40,
        overflow: 'hidden',
    },

    // Corner Markers
    cornerMarker: {
        position: 'absolute',
        width: CORNER_SIZE,
        height: CORNER_SIZE,
        borderColor: '#FFFFFF',
    },
    cornerTopLeft: {
        top: 0,
        left: 0,
        borderTopWidth: CORNER_THICKNESS,
        borderLeftWidth: CORNER_THICKNESS,
        borderTopLeftRadius: 36,
    },
    cornerTopRight: {
        top: 0,
        right: 0,
        borderTopWidth: CORNER_THICKNESS,
        borderRightWidth: CORNER_THICKNESS,
        borderTopRightRadius: 36,
    },
    cornerBottomLeft: {
        bottom: 0,
        left: 0,
        borderBottomWidth: CORNER_THICKNESS,
        borderLeftWidth: CORNER_THICKNESS,
        borderBottomLeftRadius: 36,
    },
    cornerBottomRight: {
        bottom: 0,
        right: 0,
        borderBottomWidth: CORNER_THICKNESS,
        borderRightWidth: CORNER_THICKNESS,
        borderBottomRightRadius: 36,
    },

    // Glass Overlay
    glassOverlay: {
        position: 'absolute',
        width: VIEWFINDER_WIDTH * 1.05,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.22)',
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        zIndex: 5,
    },

    // Product Image
    productImage: {
        width: VIEWFINDER_WIDTH * 0.9,
        height: VIEWFINDER_HEIGHT * 0.95,
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
        width: VIEWFINDER_WIDTH * 0.45,
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 1.5,
    },
    scanLineGap: {
        width: VIEWFINDER_WIDTH * 0.1,
    },
    scanLineRight: {
        width: VIEWFINDER_WIDTH * 0.45,
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 1.5,
    },

    // Bottom Product Card
    productCard: {
        position: 'absolute',
        bottom: 36,
        left: (width - 292) / 2, // Centered using fixed width
        width: 292,
        height: 82,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
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
