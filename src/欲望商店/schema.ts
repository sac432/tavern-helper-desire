export const Schema = z.object({
  系统: z.object({
    日期: z.string().prefault(''),
    时间段: z.string().prefault(''),
    当前场景: z.string().prefault(''),
  }).prefault({}),
  林若曦: z.object({
    身体变化: z.object({
      胸围: z.string().prefault('贫乳'),
      腰围: z.string().prefault(''),
      臀围: z.string().prefault(''),
      身高: z.coerce.number().prefault(139),
    }).prefault({}),
    开发等级: z.object({
      口: z.object({
        敏感度等级: z.coerce.number().prefault(1).transform(v => _.clamp(v, 1, 5)),
        成就: z.record(z.string(), z.object({
          名称: z.string().prefault(''),
          描述: z.string().prefault(''),
          解锁时间: z.string().prefault(''),
        }).prefault({})).prefault({}),
      }).prefault({}),
      胸: z.object({
        敏感度等级: z.coerce.number().prefault(1).transform(v => _.clamp(v, 1, 5)),
        成就: z.record(z.string(), z.object({
          名称: z.string().prefault(''),
          描述: z.string().prefault(''),
          解锁时间: z.string().prefault(''),
        }).prefault({})).prefault({}),
      }).prefault({}),
      穴: z.object({
        敏感度等级: z.coerce.number().prefault(1).transform(v => _.clamp(v, 1, 5)),
        成就: z.record(z.string(), z.object({
          名称: z.string().prefault(''),
          描述: z.string().prefault(''),
          解锁时间: z.string().prefault(''),
        }).prefault({})).prefault({}),
      }).prefault({}),
      肛: z.object({
        敏感度等级: z.coerce.number().prefault(1).transform(v => _.clamp(v, 1, 5)),
        成就: z.record(z.string(), z.object({
          名称: z.string().prefault(''),
          描述: z.string().prefault(''),
          解锁时间: z.string().prefault(''),
        }).prefault({})).prefault({}),
      }).prefault({}),
    }).prefault({}),
  }).prefault({}),
  名望: z.object({
    学校: z.object({
      名声: z.string().prefault('清纯花朵'),
      描述: z.string().prefault('老师眼中的好孩子'),
    }).prefault({}),
    父母: z.object({
      名声: z.string().prefault('乖孩子'),
      描述: z.string().prefault('懂事听话的乖孩子'),
    }).prefault({}),
    网络: z.object({
      名声: z.string().prefault('默默无名'),
      描述: z.string().prefault('没人了解的小透明'),
    }).prefault({}),
  }).prefault({}),
  欲望商店: z.object({
    余额: z.coerce.number().prefault(1000),
    当前商品: z.record(z.string(), z.object({
      名称: z.string().prefault(''),
      描述: z.string().prefault(''),
      售价: z.coerce.number().prefault(0),
      类型: z.string().prefault(''),
    }).prefault({})).prefault({}),
    上次刷新时间: z.string().prefault(''),
    购买记录: z.record(z.string(), z.object({
      商品名称: z.string().prefault(''),
      购买时间: z.string().prefault(''),
      价格: z.coerce.number().prefault(0),
    }).prefault({})).prefault({}),
    已购商品: z.record(z.string(), z.object({
      名称: z.string().prefault(''),
      效果: z.string().prefault(''),
      购买日期: z.string().prefault(''),
      数量: z.coerce.number().prefault(1),
    }).prefault({})).prefault({}),
  }).prefault({}),
});

export type Schema = z.output<typeof Schema>;