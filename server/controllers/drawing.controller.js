import Drawing from "../models/Drawing.js";

export const createDrawing = async (req,res) => {
  const {title, elements} = req.body;

  try{
    const drawing = new Drawing({
      title, 
      elements,
      createdBy: req.user._id
    })
    await drawing.save();
    res.status(201).json({success:true, drawing});
  } catch(error){
    console.error("Error creating drawing:", error);
    res.status(500).json({success:false, message:"Server error"});
  }
}

export const getDrawings = async (req,res) => {
  const userId = req.user._id;

  try {
    const drawings = await Drawing.find({ createdBy: userId }).populate('createdBy', 'username');
    res.status(200).json({success:true, drawings});
  } catch (error) {
    console.error("Error fetching drawings:", error);
    res.status(500).json({success:false, message:"Server error"});
  }
}