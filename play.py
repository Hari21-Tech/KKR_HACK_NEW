import main
import classes
import cvo

person_class_index = 0
def Camera():
    # cvo.start_Cam()
    while True:
        global img
        success, img = cvo.cap.read()
        results = main.ov_model(img, stream=True)

        # coordinates
        for r in results:
            boxes = r.boxes

            i=0

            for box in boxes:
                # class name detected jo hui
                cls = int(box.cls[0])

                # Only return and run if the cls is a person..warna kuch nhi
                if cls == person_class_index:
                    # bounding box creation and tracking 
                    i+=1
                    x1, y1, x2, y2 = box.xyxy[0]
                    x1, y1, x2, y2 = int(x1), int(y1), int(x2), int(y2) # convert to int values since humei toh usmei milegi na lol

                    # camera ko box ka batao and daalo
                    cvo.cv2.rectangle(img, (x1, y1), (x2, y2), (158,255,249), 3)

                    # object details daalenge mast mast
                    org = [x1, y1]
                    font = cvo.cv2.FONT_HERSHEY_COMPLEX
                    fontScale = 1
                    color = (255, 0, 0)
                    thickness = 2

                    cvo.cv2.putText(img, classes.classNames[cls], org, font, fontScale, color, thickness)
                    return i
        
        # cvo.cv2.imshow('Webcam', img)
        # if cvo.cv2.waitKey(1) == ord(':'):
        #     break        

def crowd(people, area):
    crowd_density = ((people*3)/area)*100
    return crowd_density
    
def integrate():
    # cvo.start_Cam()
    while True:
        x = Camera()
        y = crowd(x, 1000)
        return y
def boolx():
    while True:
        z = integrate()
        if z<30:
            return True
        else:
            return False
        
def runner():
    cvo.start_Cam()

    while True:
        boolx()
        cvo.cv2.imshow('Webcam', img)
        if cvo.cv2.waitKey(1) == ord(':'):
            break  
        
    # cvo.cap.release()
    # cvo.cv2.destroyAllWindows()
    return

runner()
cvo.cap.release()
cvo.cv2.destroyAllWindows()
    