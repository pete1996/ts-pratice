import React, { useState, useCallback, useEffect } from "react";
import { Button } from "antd";

export default function TestEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState<string>("b");

  const [score, setScore] = useState<number>(0);

  const handleAlertClick = useCallback(() => {
    setCount(count + 1);
    setName(name + "a");
  }, [count, name]);

  useEffect(function () {
    console.log(count);
    console.log(name);
  }, [count,name, score]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setScore(score + 1)}>
        增加 count
      </Button>
      <Button type="primary"  style={{margin: 10}}onClick={handleAlertClick}>
        更新state
      </Button>
      <p>name: {name}</p>
      <p>score: {score}</p>
    </div>
  );
}
