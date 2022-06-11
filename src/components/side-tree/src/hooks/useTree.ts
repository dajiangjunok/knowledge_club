interface Tree {
  label: string
  type: string
  children?: Tree[]
}

interface ITree {
  treeData: Tree[]
  customNodeClass: (data: Tree) => string
  treeClass: (data: Tree) => string
  handleNodeClick: (treeData: Tree) => void
}

export function useTree(changeSelect: () => void): ITree {
  const treeData: Tree[] = [
    {
      label: 'HALO',
      type: 'category',
      children: [
        {
          label: '病理质控',
          type: 'folder'
        },
        {
          label: '设计规范',
          type: 'folder',
          children: [
            {
              label: '设计对照表-细节对照',
              type: 'file'
            },
            {
              label: '设计对照表-细节对照',
              type: 'file'
            }
          ]
        }
      ]
    }
  ]

  const customNodeClass = (data: Tree) => {
    switch (data.type) {
      case 'category':
        return 'category'
      case 'folder':
        return 'folder'
      case 'file':
        return 'file'
      default:
        return ''
    }
  }

  const treeClass = (data: Tree) => {
    switch (data.type) {
      case 'category':
        return 'iconyonghuming'
      case 'folder':
        return 'iconguidang'
      case 'file':
        return 'iconbushuwancheng'
      default:
        return ''
    }
  }

  const handleNodeClick = (treeData: Tree) => {
    changeSelect()
    console.log(treeData)
  }

  return {
    treeData,
    customNodeClass,
    treeClass,
    handleNodeClick
  }
}
