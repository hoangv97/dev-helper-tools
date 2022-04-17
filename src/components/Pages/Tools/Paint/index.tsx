import {
  Button,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExportButton } from 'components/Button';
import { NumberInput } from 'components/Form';
import {
  ACTIONS,
  getLocalStorage,
  setLocalStorage,
} from 'helpers/localStorage';
import { useEffect, useRef, useState } from 'react';

const Home = () => {
  const canvasRef = useRef<any>();
  const ctxRef = useRef<any>();
  const [isDrawing, setIsDrawing] = useState(false);

  // Settings
  const [canvasSize, setCanvasSize] = useState({ width: 2000, height: 1000 });
  const [bgColor, setBgColor] = useState<string>();
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState(
    useColorModeValue('#000000', '#ffffff')
  );
  const [eraser, setEraser] = useState(false);

  const linesData = useRef<any[]>(
    getLocalStorage(ACTIONS.PAINT, { lines: [] }).lines
  );

  const saveStorage = () => {
    setLocalStorage(ACTIONS.PAINT, {
      bgColor,
      lines: linesData.current,
    });
  };

  const redraw = (ctx: any, linesData: any[]) => {
    for (var i = 1; i < linesData.length; i++) {
      ctx.beginPath();
      ctx.moveTo(linesData[i - 1].x, linesData[i - 1].y);
      ctx.lineWidth = linesData[i].width;
      ctx.strokeStyle = linesData[i].color;
      ctx.lineTo(linesData[i].x, linesData[i].y);
      ctx.stroke();
    }
  };

  const storeLines = (x?: number, y?: number) => {
    linesData.current.push({
      x,
      y,
      color: lineColor,
      width: lineWidth,
    });
    saveStorage();
  };

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;

    redraw(ctx, linesData.current);
  }, [lineColor, lineWidth]);

  useEffect(() => {
    if (!bgColor) return;
    ctxRef.current.fillStyle = bgColor;
    ctxRef.current.fillRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  }, [bgColor]);

  // Function for starting the drawing
  const startDrawing = (e: any) => {
    ctxRef.current.beginPath();
    if (eraser && bgColor) {
      ctxRef.current.lineWidth = 50;
      ctxRef.current.strokeStyle = bgColor;
    }
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  // Function for ending the drawing
  const endDrawing = () => {
    ctxRef.current.closePath();
    storeLines();
    setIsDrawing(false);
  };

  const draw = (e: any) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    ctxRef.current.stroke();

    storeLines(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const reset = () => {
    setEraser(false);
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    linesData.current = [];
    saveStorage();
  };

  return (
    <Flex gap="4">
      <Flex
        flexGrow={1}
        overflow="hidden"
        border="1px solid"
        borderColor="gray.500"
      >
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
        />
      </Flex>
      <Flex direction="column" gap="3" w={300}>
        <Text>Background Color </Text>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => {
            setBgColor(e.target.value);
          }}
        />
        <Text>Brush Color </Text>
        <input
          type="color"
          value={lineColor}
          onChange={(e) => {
            setLineColor(e.target.value);
          }}
        />
        <Text>Brush Width </Text>
        <Slider
          aria-label="slider-brush-width"
          defaultValue={lineWidth}
          min={3}
          max={20}
          onChange={setLineWidth}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Button
          size="sm"
          colorScheme={eraser ? 'red' : 'gray'}
          onClick={() => {
            setEraser(!eraser);
          }}
        >
          Eraser
        </Button>
        <ExportButton
          defaultFileName="image.png"
          getContent={() => canvasRef.current.toDataURL()}
        />
        <Button size="sm" onClick={reset}>
          Reset
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
